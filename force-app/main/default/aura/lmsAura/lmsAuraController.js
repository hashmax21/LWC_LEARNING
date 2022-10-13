({
    handleMessage : function(component, event) {
        if(message!= null && message.getParam("lmsdata")!= nulll)
    {
    component.set('v.messageReceived',message.getParam("lmsdata").value)
    }
    },

    inputHandler : function(component, event) {
        console.log(event.target.value)
        component.set("v.messageValue",event.target.value)
    },

    handleClick:function (component, event)
    {
        let msg = component.get("v.messageValue")
        let messasge = {lmsData : {value: msg}}
        component.find("SampleMessageChannel").publish(messasge)

    }
})
