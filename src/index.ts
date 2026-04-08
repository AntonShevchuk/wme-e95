import { NAME, TRANSLATION } from './translations'
import { BUTTONS, CONFIGS } from './buttons'
import { LAYERS } from './layers'
import { E95 } from './e95'
import css from './style.css'

$(document).on('bootstrap.wme', () => {
  WMEUI.addTranslation(NAME, TRANSLATION)
  WMEUI.addStyle(css)

  new E95(NAME, LAYERS, BUTTONS, CONFIGS)
})
