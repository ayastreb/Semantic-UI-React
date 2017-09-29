import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const StepExampleCompletedWithoutIcon = () => (
  <Step.Group>
    <Step completed>
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepExampleCompletedWithoutIcon
