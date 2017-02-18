var JsonDB = '{"Config": [{"Name": "MyDB","Code": "UTF-8","Library": "./" }],"Users": [{"ID": "Root","Password": "Root","Jurisdiction": "ROOT"},{"ID": "Guest","Password": "Guest","Jurisdiction": "GUEST"}]}';

function Add_Table(DB, Table) {
    var OBJ = eval('(' + DB + ')');
    var Arr = new Array();
    OBJ[Table] = Arr;
    return OBJ;
}

function Add_Table_Data(DB, Table) {
    var OBJ = eval('(' + DB + ')');
    DATA = new Object();
    for (var Name in OBJ[Table][0]) {
        DATA[Name] = "";
    }
    OBJ[Table].push(DATA);
    return OBJ;
}

function Add_Field_Name(DB, Table, Name) {
    var OBJ = eval('(' + DB + ')');
    DATA = new Object();
    DATA[Name] = "";
    for (var i in OBJ[Table]) {
        OBJ[Table][i][Name] = "";
    }
    return OBJ;
}

function Add_Field_Value(DB, Table, Order, Name, Value) {
    var OBJ = eval('(' + DB + ')');
    OBJ[Table][Order][Name] = Value;
    return OBJ;
}

function Query_Value(DB, Table, Order, Name) {
    var OBJ = eval('(' + DB + ')');
    return OBJ[Table][Order][Name];
}

function Delete_Table(DB, Table) {
    var OBJ = eval('(' + DB + ')');
    delete OBJ[Table];
    return OBJ;
}

function Delete_Table_Data(DB, Table, Order) {
    var OBJ = eval('(' + DB + ')');
    delete OBJ[Table][Order];
    return OBJ;
}

function Delete_Table_Field(DB, Table, Name) {
    var OBJ = eval('(' + DB + ')');
    for (var i in OBJ[Table]) {
        delete OBJ[Table][i][Name];
    }
    return OBJ;
}

console.log('Add_Table');
console.log(Add_Table('{"Config": [{"Name": "MyDB","Code": "UTF-8","Library": "./" }],"Users": [{"ID": "Root","Password": "Root","Jurisdiction": "ROOT"},{"ID": "Guest","Password": "Guest","Jurisdiction": "GUEST"}]}', 'Table'));
console.log('Add_Table_Data');
console.log(Add_Table_Data('{"Config": [{"Name": "MyDB","Code": "UTF-8","Library": "./" }],"Users": [{"ID": "Root","Password": "Root","Jurisdiction": "ROOT"},{"ID": "Guest","Password": "Guest","Jurisdiction": "GUEST"}]}', 'Users'));
console.log('Add_Field_Name');
console.log(Add_Field_Name('{"Config": [{"Name": "MyDB","Code": "UTF-8","Library": "./" }],"Users": [{"ID": "Root","Password": "Root","Jurisdiction": "ROOT"},{"ID": "Guest","Password": "Guest","Jurisdiction": "GUEST"}]}', 'Users', 'Hello'));
console.log('Add_Field_Value');
console.log(Add_Field_Value('{"Config": [{"Name": "MyDB","Code": "UTF-8","Library": "./" }],"Users": [{"ID": "Root","Password": "Root","Jurisdiction": "ROOT"},{"ID": "Guest","Password": "Guest","Jurisdiction": "GUEST"}]}', 'Users', 0, 'Name', 'Value'));
console.log('Query_Value');
console.log(Query_Value('{"Config": [{"Name": "MyDB","Code": "UTF-8","Library": "./" }],"Users": [{"ID": "Root","Password": "Root","Jurisdiction": "ROOT"},{"ID": "Guest","Password": "Guest","Jurisdiction": "GUEST"}]}', "Users", 0, "ID"));
console.log('Delete_Table');
console.log(Delete_Table('{"Config": [{"Name": "MyDB","Code": "UTF-8","Library": "./" }],"Users": [{"ID": "Root","Password": "Root","Jurisdiction": "ROOT"},{"ID": "Guest","Password": "Guest","Jurisdiction": "GUEST"}]}', 'Table'));
console.log('Delete_Table_Data');
console.log(Delete_Table_Data('{"Config": [{"Name": "MyDB","Code": "UTF-8","Library": "./" }],"Users": [{"ID": "Root","Password": "Root","Jurisdiction": "ROOT"},{"ID": "Guest","Password": "Guest","Jurisdiction": "GUEST"}]}', 'Users', 0));
console.log('Delete_Table_Field');
console.log(Delete_Table_Field('{"Config": [{"Name": "MyDB","Code": "UTF-8","Library": "./" }],"Users": [{"ID": "Root","Password": "Root","Jurisdiction": "ROOT"},{"ID": "Guest","Password": "Guest","Jurisdiction": "GUEST"}]}', 'Users', 'Password'));
