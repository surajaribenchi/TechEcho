import React, { useState } from 'react';
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button';
import styles from '../StepPhoneEmail.module.css';

const Phone = () => {
  return (
    <Card title="Enter your Phone Number" icon="phone">
      <div>
        <Button text="Next"/>
      </div>
    </Card>
  )
}

export default Phone
