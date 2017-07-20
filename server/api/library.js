import { Router } from 'express'
import templates from '../../static/templates'
import components from '../../static/components'

const libraryRouter = Router()

libraryRouter.get('/library', (req, res) => {
  res.json({
    templates: templates.map(template => ({
      name: template.name,
      root: '/templates/' + template.root
    })),
    components: components.map(component => ({
      name: component.name,
      root: '/components/' + component.root
    }))
  })
})

export default libraryRouter
