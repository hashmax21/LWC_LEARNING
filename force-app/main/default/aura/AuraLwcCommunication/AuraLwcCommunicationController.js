({
    handleMsg : function(component, event) {
        var msg = event.getParam('msg');
        component.set("v.message",msg)  // binding the msg received from lightning to the componnet made on the Aura view
    }
})
