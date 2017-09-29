import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const StepExampleEvenlyDividedAnother = () => (
  <Step.Group widths={2}>
    <Step>
      <Icon icon='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
      </Step.Content>
    </Step>
    <Step active>
      <Icon name='credit card' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepExampleEvenlyDividedAnother
