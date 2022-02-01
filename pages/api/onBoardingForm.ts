

import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'


// REFER TO DIS VID https://www.youtube.com/watch?v=QrVYLLpoyMw
const SENDGRID_API_KEY = "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"
sgMail.setApiKey(SENDGRID_API_KEY)

const sendOnBoardingForm = async (req: NextApiRequest, res: NextApiResponse) => {

  if(req.method === "POST") {
    const msg = {
      to: 'malayauchi@gmail.com', // Change to your recipient
      from: 'affiliate-application@malayauchi.com', // Change to your verified sender
      subject: `Received new agent request from: ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:${req.body.email}</p>`
    }
    try {
      const info = await sgMail.send(msg)
      res.status(200).json({message:"success"})
    } catch (error) {
      console.log(error);
      res.status(422).json({statusText:"fail to send refer server log"})
    }
  } else  {
    res.status(404).json({statusText:"not found"})
  }
  return res
}

export default sendOnBoardingForm