let SwitchButton = {
    status: 'Turn On',
    connectionToLamp: 'Connect',
    connectToLamp: function () {
        if (this.connectionToLamp === 'Connect'){
            this.lampProperty = Lamp;
            this.connectionToLamp = 'Disconnect';
        } else this.connectionToLamp = 'Connect'
    },
    power: function () {
        if(this.connectionToLamp === 'Disconnect'){
            if (this.status === 'Turn On' && this.lampProperty.getStatus() ==='Off'){
                this.status = 'Turn Off';
                this.lampProperty.setStatus('On');
            } else {
                this.status = 'Turn On';
                this.lampProperty.setStatus('Off');
            }
        }else alert('Please connect lamp and switch');
    }
};
let Lamp = {
    status : 'Off',
    getStatus: function () {
        return this.status
    },
    setStatus: function (newStatus) {
        this.status = newStatus
    }
};