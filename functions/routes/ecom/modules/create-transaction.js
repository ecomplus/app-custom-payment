exports.post = ({ appSdk }, req, res) => {
  const { params, application } = req.body
  const { amount, buyer } = params
  const config = Object.assign({}, application.data)

  let paymentMethodName = params.payment_method.name
  if (paymentMethodName) {
    paymentMethodName = paymentMethodName.split(' ::')[0]
  }

  let notes, paymentLink
  if (Array.isArray(config.payment_options) && config.payment_options.length) {
    let paymentOption = config.payment_options.find(paymentOption => {
      const paymentMethod = paymentOption.payment_method
      return paymentMethod &&
        paymentMethod.code === params.payment_method.code &&
        (!paymentMethod.name || paymentMethod.name === paymentMethodName)
    })
    if (!paymentOption) {
      paymentOption = config.payment_options[0]
    }
    if (typeof paymentOption.text === 'string') {
      notes = paymentOption.text.substr(0, 255)
    }
    if (typeof paymentOption.payment_link === 'string' && paymentOption.payment_link) {
      paymentLink = paymentOption.payment_link
        .replace(/{amount}/g, amount.total.toFixed(2).replace('.', ','))
        .replace(/{email}/g, buyer.email)
    }
  }

  const transaction = {
    payment_link: paymentLink,
    intermediator: {
      payment_method: params.payment_method
    },
    currency_id: params.currency_id,
    currency_symbol: params.currency_symbol,
    amount: amount.total,
    status: {
      current: amount.total >= 1 ? 'pending' : 'paid'
    },
    flags: [
      'app-custom-payments'
    ],
    notes
  }

  const payload = {
    redirect_to_payment: Boolean(paymentLink),
    transaction
  }

  res.send(payload)
}
