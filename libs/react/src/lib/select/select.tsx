import React, { ReactNode } from 'react'
import {
  IndicatorType,
  IValidator,
  randomId,
  validateClassName,
} from '@sebgroup/extract'
import { ChevronDown } from '../icons'
import { FormItem } from '../formItem'

export interface SelectProps {
  id?: string
  className?: string
  label?: string
  labelInformation?: string
  children: ReactNode
  validator?: IValidator
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  onSelect?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  defaultValue?: string | number
  value?: string | number
  testId?: string
  expandableInfo?: string
  expandableInfoButtonLabel?: string
}

export interface OptionProps {
  children: string
  value: string | number
  disabled?: boolean
  invalid?: boolean
  autocomplete?: string
  autofocus?: boolean
  form?: string
  name?: string
  required?: boolean
  size?: number
  selected?: boolean
}

export interface OptionGroupProps {
  label: string
  children: React.ReactElement<OptionProps> | React.ReactElement<OptionProps>[]
  disabled?: boolean
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      className,
      children,
      validator,
      label,
      labelInformation,
      defaultValue,
      value,
      testId,
      onChange,
      onSelect,
      expandableInfo,
      expandableInfoButtonLabel,
    },
    ref
  ) => {
    const selectId = id ?? randomId()

    const validatorClassName = validateClassName(
      validator?.indicator as IndicatorType
    )

    return (
      <FormItem
        label={label}
        labelInformation={labelInformation}
        expandableInfo={expandableInfo}
        expandableInfoButtonLabel={expandableInfoButtonLabel}
        inputId={selectId}
      >
        <div className={`gsd-select ${validatorClassName}`}>
          <select
            id={selectId}
            data-testid={testId}
            className={className}
            defaultValue={defaultValue}
            value={value}
            ref={ref}
            onChange={(event) => {
              onChange && onChange(event)
            }}
          >
            {children}
          </select>
          {<ChevronDown />}
        </div>
      </FormItem>
    )
  }
)

export const Option = ({ value, children, ...rest }: OptionProps) => {
  return (
    <option value={value} {...rest}>
      {children}
    </option>
  )
}

export const OptionGroup = ({
  label,
  disabled,
  children,
}: OptionGroupProps) => {
  return (
    <optgroup label={label} disabled={disabled}>
      {children}
    </optgroup>
  )
}

export default { Select, Option, OptionGroup }
