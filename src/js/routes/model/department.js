define(['ojs/ojcore', 'knockout', 'jquery', 'common/TableUtils',
    'ojs/ojbutton', 'ojs/ojtable', 'ojs/ojpagingcontrol', 'ojs/ojpagingtabledatasource',
    'ojs/ojarraytabledatasource', 'ojs/ojswitch', 'ojs/ojlabel'], 
(oj, ko, $, tableutils) => {
    
    function DepartmentViewModel() {
        
        const self = this;
        
        self.heading = 'Departments';
        self.selectionData = ko.observable();
        self.pagingDataSource = ko.observable(new oj.PagingTableDataSource(new oj.ArrayTableDataSource([])));
        
        self.DepartmentData = [{DepartmentId: 3, DepartmentName: 'IT Support', LocationId: 200, ManagerId: 300},
                               {DepartmentId: 5, DepartmentName: 'BB', LocationId: 200, ManagerId: 300},
                               {DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300},
                               {DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300},
                               {DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300},
                               {DepartmentId: 40, DepartmentName: 'Payroll', LocationId: 200, ManagerId: 300},
                               {DepartmentId: 50, DepartmentName: 'NOC', LocationId: 200, ManagerId: 300}];
        self.DepartmentColumns = [{ 'headerText': 'DepartmentId', field: 'DepartmentId' },
                                  { 'headerText': 'DepartmentName', field: 'DepartmentName' },
                                  { 'headerText': 'ManagerId', field: 'ManagerId' },
                                  { 'headerText': 'LocationId', field: 'LocationId' }];
        
        self.selectionMode = ko.observable('single');
        self.selectionType = ko.computed(() => {
            return {
                row: self.selectionMode()
            };
        });
        
        self.departmentFetch = () => {
            self.pagingDataSource(new oj.PagingTableDataSource(new oj.ArrayTableDataSource(self.DepartmentData)));
        };
        
        self.switchMode = ko.observable(self.selectionMode() === 'single');
        self.switchMode.subscribe(selected => {
            self.selectionMode(selected ? 'single' : 'multiple');
        });
        
        self.onRowSelection = event => {
            self.selectionData('');
            Promise.all(tableutils.getSelectionData(event, self.pagingDataSource())).then(selection => {
                let arr = [];
                selection.forEach(row => {
                    const { DepartmentId, DepartmentName, LocationId, ManagerId } = row['data'];
                    arr.push([DepartmentId, DepartmentName, LocationId, ManagerId].join(', '))
                });
                self.selectionData(arr.join(' | '));
            });
        }
        
    }
    
    return new DepartmentViewModel();
    
});