theProtoObj = {
    something: function(){
        console.log("something")
    }
}

withProto = Object.create(theProtoObj);
withProto.something();
