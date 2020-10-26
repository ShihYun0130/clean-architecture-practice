describe('When calling get api of /birthdayGreeting)', () => {
  it('User can successfully get a birthday message if today is someone\'s birthday', () => {
    cy.request({
      method: 'GET',
      url: '/api/birthdayGreeting/'
    }).then((res) => {
      const responseData = res.body
      expect(responseData.length).to.be.greaterThan(0)
      expect(responseData[0]).to.have.property('subject')
      expect(responseData[0]).to.have.property('content')
    })
  })
})

describe('When calling get api of /birthdayGreetingV2)', () => {
  it('User can successfully get a birthday message with discount and recommendation items if today is someone\'s birthday', () => {
    cy.request({
      method: 'GET',
      url: '/api/birthdayGreetingV2/'
    }).then((res) => {
      const responseData = res.body
      expect(responseData.length).to.be.greaterThan(0)
      expect(responseData[0]).to.have.property('subject')
      expect(responseData[0]).to.have.property('content')
    })
  })
})