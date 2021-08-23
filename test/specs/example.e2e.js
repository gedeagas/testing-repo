describe('Instagram chat service', () => {
    it('shoud allow notification', async () => { // pay attention to `async` keyword
        const el = await $('~Allow')
        await el.click()
    })

    it('should click the explore bar', async () => { // pay attention to `async` keyword
        const el = await $('~explore-tab')
        await el.click()
    })

    it('should search zuckerberg account', async () => { // pay attention to `async` keyword
        const el = await $('~search-text-input')
        await el.click()
        await el.setValue("jokowi")
        const elzuck = await $('~zuck, verified account')
        await elzuck.waitForExist({ timeout: 5000 });
        await elzuck.click()
    })

    it('should go to message', async () => { // pay attention to `async` keyword
        const el2 = await $('~Message')
        await el2.waitForExist({ timeout: 5000 });
        await el2.click();
    })

    it('should type automated message', async () => { // pay attention to `async` keyword
       
        const el3 = await $('~direct-keyboard-text-view')
        await el3.waitForExist({ timeout: 5000 });
        await el3.setValue("Automated Testing");
    })

    it('wait for 2 seconds', async () => {
        const starttime = new Date().getTime()
        await browser.pause(1000)
        const endtime = new Date().getTime()
        console.log(endtime - starttime) // outputs: 3000
    });

    it('should send automated message', async () => { // pay attention to `async` keyword
        const el4 = await $('~send')
        await el4.waitForExist({ timeout: 5000 });
        await el4.click();
    })

    it('wait for 3 seconds', async () => {
        const starttime = new Date().getTime()
        await browser.pause(1000)
        const endtime = new Date().getTime()
        console.log(endtime - starttime) // outputs: 3000
    });

    
   
  });
  
