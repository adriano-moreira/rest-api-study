describe('rest api POST form', () => {
    it('shoud pong POST json', () => {
        cy.request({
            method: 'POST',
            url: '/ping-pong/form',
            form: true,
            body: {
                name: 'me',
                one: 1,
                is: true,
            }
        }).then(resp => {
            expect(resp.status).be.eq(200);
            cy.log('body', resp.body)
            expect(resp.body.name).be.eq('me');
            expect(resp.body.one).be.eq('1');
            expect(resp.body.is).be.eq('true');
        })
    });
})
