define(function() {
    
    function EmployeeViewModel() {
        
        const self = this;
        
        self.heading = 'Employees';
        
        self.init = () => {
            console.log('Initialized employee view');
        };
        
        self.connected = () => {
            console.log('Connected to employee view');
        };
        
        self.disconnected = () => {
            console.log('Disconnected from employee view');
        };
        
    }
    
    return new EmployeeViewModel();
    
});