/**
 * Watch components and templates directory 
 * so we can add package in dynamic way
 */
import { join, basename, dirname, resolve } from 'path'
import chokidar from 'chokidar'

const TEMPLATE_PATH = join('static', 'templates')
const COMPONENT_PATH = join('static', 'components')
const INDEX_FILE = 'index.html'
const COMPONENT_CONFIG_FILE = 'component.config.js'

const boardWatcher = chokidar.watch([TEMPLATE_PATH, COMPONENT_PATH], {
  // Don't watch dotfile and node_modules
  ignored: /(^|[\/\\])\..|node_modules/,
  ignorePermissionErrors: true,
  depth: 1,
  cwd: resolve(__dirname, '..')
})

export default board => {
  boardWatcher.on('add', path => {
    if (~~([INDEX_FILE, COMPONENT_CONFIG_FILE].indexOf(basename(path)))) {
      board.add(dirname(path))
    }
  })
  boardWatcher.on('change', path => {
    if (basename(path) === COMPONENT_CONFIG_FILE) {
      board.add(dirname(path))
    }
  })
  boardWatcher.on('unlink', path => {
    if (~~([INDEX_FILE, COMPONENT_CONFIG_FILE].indexOf(basename(path)))) {
      board.remove(dirname(path))
    }
  })
  boardWatcher.on('addDir', path => {
    if (dirname(path) === COMPONENT_PATH || dirname(path) === TEMPLATE_PATH) {
      board.add(path)
    }
  })
  boardWatcher.on('unlinkDir', path => {
    if (dirname(path) === COMPONENT_PATH || dirname(path) === TEMPLATE_PATH) {
      board.remove(path)
    }
  })
}
