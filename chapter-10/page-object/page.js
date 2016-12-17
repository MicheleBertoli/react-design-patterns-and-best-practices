class Page {

  constructor(wrapper) {
    this.wrapper = wrapper
  }

  fill(name, value) {
    const field = this.wrapper.find(`[name="${name}"]`)
    field.simulate('change', { target: { name, value } })
  }

  submit() {
    const form = this.wrapper.find('form')
    form.simulate('submit', { preventDefault() {} })
  }

}

export default Page
