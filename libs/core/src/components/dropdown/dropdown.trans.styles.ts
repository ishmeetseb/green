import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import styles from './dropdown.trans.styles.scss'

import * as Listbox from '../../primitives/listbox/listbox.trans.styles'
import * as Popover from '../../primitives/popover/popover.trans.styles'

export function register() {
  Listbox.register()
  Popover.register()
  TransitionalStyles.instance.register('gds-dropdown', styles.toString())
}

export default register
