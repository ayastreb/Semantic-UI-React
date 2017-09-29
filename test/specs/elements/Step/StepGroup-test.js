import React from 'react'

import Step from 'src/elements/Step/Step'
import StepGroup from 'src/elements/Step/StepGroup'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('StepGroup', () => {
  common.isConformant(StepGroup)
  common.hasUIClassName(StepGroup)
  common.rendersChildren(StepGroup)

  common.implementsWidthProp(StepGroup, SUI.WIDTHS, {
    canEqual: false,
    propKey: 'widths',
  })

  common.propKeyAndValueToClassName(StepGroup, 'stackable', ['tablet'])

  common.propKeyOnlyToClassName(StepGroup, 'fluid')
  common.propKeyOnlyToClassName(StepGroup, 'ordered')
  common.propKeyOnlyToClassName(StepGroup, 'vertical')

  common.propKeyOrValueAndKeyToClassName(StepGroup, 'attached', ['top', 'bottom'])

  describe('items', () => {
    it('renders children', () => {
      const wrapper = shallow(<StepGroup items={['foo', 'bar']} />)
      const items = wrapper.children()

      wrapper.should.have.exactly(2).descendants('Step')
      items.at(0).should.have.prop('content', 'foo')
      items.at(1).should.have.prop('content', 'bar')
    })
  })
})
