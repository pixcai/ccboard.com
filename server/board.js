/**
 * A board for managing templates and components
 */
import { existsSync, readFileSync } from 'fs'
import { join, resolve } from 'path'
import _ from 'lodash'
import boardConfig from '../board.config.json'

const INDEX_FILE = 'index.html'
const COMPONENT_CONFIG_FILE = 'component.config.js'

export default class Board {
  constructor () {
    // package list (include templates and components)
    this.library = []
  }

  add (path) {
    const indexFilePath = resolve(path, INDEX_FILE)
    const componentConfigFilePath = resolve(path, COMPONENT_CONFIG_FILE)

    if (existsSync(indexFilePath) && existsSync(componentConfigFilePath)) {
      const component = {
        path: path,
        publicPath: resolve(path, 'static')
      }
      let componentConfig = readFileSync(componentConfigFilePath, { encoding: 'utf8' })

      try {
        componentConfig = JSON.parse(componentConfig)

        if (componentConfig) {
          component.options = componentConfig
          this.library.push(component)
        }
      } catch (e) {}
    }
  }

  remove (path) {
    return _.remove(this.library, component => {
      return path === component.path
    })
  }
}

Board.TYPE_TEMPLATE = Symbol('board:template')
Board.TYPE_COMPONENT = Symbol('board:component')
