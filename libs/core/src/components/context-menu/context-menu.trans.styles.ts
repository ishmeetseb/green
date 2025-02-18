import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import styles from './context-menu.trans.styles.scss'

import * as Popover from '../../primitives/popover/popover.trans.styles'
import * as Listbox from '../../primitives/listbox/listbox.trans.styles'

export function register() {
  TransitionalStyles.instance.register('gds-context-menu', styles.toString())
  Popover.register()
  Listbox.register()
}

export default register
