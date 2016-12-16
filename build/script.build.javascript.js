process.env.BABEL_ENV = 'production'

var
  fs = require('fs'),
  zlib = require('zlib'),
  rollup = require('rollup'),
  uglify = require('uglify-js'),
  babel = require('rollup-plugin-babel'),
  string = require('rollup-plugin-string'),
  vue = require('rollup-plugin-vue'),
  nonStandalone = process.argv[2] === 'simple' || process.argv[3] === 'simple',
  version = process.env.VERSION || require('../package.json').version,
  file,
  banner =
    '/*!\n' +
    ' * MetroVue Framework v' + version + '\n' +
    ' * (c) ' + new Date().getFullYear() + ' Jimmycliff Obonyo <cliffjimmy27@gmail.com>\n' +
    ' * Released under the MIT License.\n' +
    ' */',
  vueConfig = {
    compileTemplate: true,
    htmlMinifier: {collapseBooleanAttributes: false}
  },
  babelConfig = {
    exclude: 'node_modules/**'
  },
  stringConfig = {
    include: ['**/*.svg', '**/*.html']
  },
  rollupConfig = {
    entry: 'src/index.js',
    plugins: [vue(vueConfig), string(stringConfig), babel(babelConfig)]
  }

'index index.es6'.split(' ').forEach(function (name) { // eslint-disable-line
  file = fs
    .readFileSync('src/' + name + '.js', 'utf-8')
    .replace(/version: '[\d\.]+'/, "version: '" + version + "'")
  fs.writeFileSync('src/' + name + '.js', file)
})

// CommonJS build.
rollup
.rollup(rollupConfig)
.then(function (bundle) {
  return write('dist/metrovue.common.js', bundle.generate({
    format: 'cjs',
    banner: banner,
    useStrict: false
  }).code)
})
// ES6 Dev Build
.then(function () {
  return rollup
    .rollup({
      entry: 'src/index.es6.js',
      plugins: [vue(vueConfig), string(stringConfig)]
    })
    .then(function (bundle) {
      return write('dist/metrovue.es6.js', bundle.generate({
        exports: 'named',
        banner: banner,
        useStrict: false
      }).code)
    })
})
// Standalone Dev Build
.then(function () {
  if (nonStandalone) {
    return
  }
  return rollup.rollup(rollupConfig)
  .then(function (bundle) {
    return write('dist/metrovue.standalone.js', bundle.generate({
      format: 'umd',
      banner: banner,
      moduleName: 'Metrovue',
      useStrict: false
    }).code)
  })
})
// Standalone Production Build
.then(function () {
  if (nonStandalone) {
    return
  }
  return rollup.rollup(rollupConfig)
  .then(function (bundle) {
    var code, res, map

    code = bundle.generate({
      format: 'umd',
      moduleName: 'Metrovue',
      banner: banner,
      useStrict: false
    }).code

    res = uglify.minify(code, {
      fromString: true,
      outSourceMap: 'metrovue.standalone.min.js.map',
      output: {
        preamble: banner,
        ascii_only: true
      }
    })

    // fix uglifyjs sourcemap
    map = JSON.parse(res.map)
    map.sources = ['metrovue.standalone.js']
    map.sourcesContent = [code]
    map.file = 'metrovue.standalone.min.js'

    return [
      write('dist/metrovue.standalone.min.js', res.code),
      write('dist/metrovue.standalone.min.js.map', JSON.stringify(map))
    ]
  })
  .then(zip)
})
.catch(function (e) {
  console.log(e)
})

function write (dest, code) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(dest, code, function (err) {
      if (err) return reject(err)
      console.log(dest.bold + ' ' + getSize(code).gray)
      resolve()
    })
  })
}

function zip () {
  return new Promise(function (resolve, reject) {
    fs.readFile('dist/metrovue.standalone.min.js', function (err, buf) {
      if (err) return reject(err)
      zlib.gzip(buf, function (err, buf) {
        if (err) return reject(err)
        write('dist/metrovue.standalone.min.js.gz', buf).then(resolve)
      })
    })
  })
}

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}
