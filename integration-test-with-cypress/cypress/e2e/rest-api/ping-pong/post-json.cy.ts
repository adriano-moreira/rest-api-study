describe('rest api POST json', () => {
    it('shoud pong POST json', () => {
        cy.request({
            method: 'POST',
            url: '/ping-pong',
            body: {
                name: 'me',
                one: 1,
                is: true,
                arr: [
                    '...',
                    0
                ]
            }
        }).then(resp => {
            expect(resp.status).be.eq(200);
            cy.log('body', resp.body)
            expect(resp.body.name).be.eq('me');
            expect(resp.body.one).be.eq(1);
            expect(resp.body.is).be.eq(true);
            expect(resp.body.arr[0]).be.eq('...');
            expect(resp.body.arr[1]).be.eq(0);
        })
    });
})
