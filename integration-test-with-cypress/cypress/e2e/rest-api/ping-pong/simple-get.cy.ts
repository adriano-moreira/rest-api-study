describe('simple get', () => {

    it('shoud ...', () => {
        let qs = new URLSearchParams();
        cy.request({
            url: '/ping-pong?',
            qs: {
                name: "me",
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
    })

    it('shoud ... with array', () => {
        let qs = new URLSearchParams();
        cy.request({
            url: '/ping-pong?a=1&a=2&b=left&b=right&c=c',
        }).then(resp => {
            expect(resp.status).be.eq(200);

            cy.log('body', resp.body)
            expect(resp.body.a[0]).be.eq('1');
            expect(resp.body.a[1]).be.eq('2');
            expect(resp.body.b[0]).be.eq('left');
            expect(resp.body.b[1]).be.eq('right');
            expect(resp.body.c).be.eq('c');
        })
    })

})