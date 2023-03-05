import { makeAutoObservable } from 'mobx'

export default class KanbanStore {
    constructor() {
        this._format = 'канбан';
        this._data = {
            Backlog: {
                name: "Backlog",
                items: [
                    {name:''},
                    {name:''}
                ]
            },
            toDo: {
                name: "To do",
                items: [
                    {name:''}
                ]
            },
            inProgress: {
                name: "In progress",
                items: [
                    {name:''}
                ]
            },
            done:{
                name:'Done',
                items:[
                    {name:''}
                ]
            }
        };
        this._lastItemId = 0;
        makeAutoObservable(this);
    }

    setFormat(format){
        this._format = format;
    }

    get format(){
        return this._format;
    }

    add(data) {
        const newItem = {
            ...data,
            id: String(this._lastItemId + 1)
        };
        this._lastItemId += 1;
        this._hunterData.requested.items.push(newItem);
        console.log(this._data)
    }

    sortData(props) {
        const newData = { ...this._data };
        Object.keys(newData).forEach(sectionKey => {
            newData[sectionKey].items.sort((a, b) => {
                let comparison = 0;
                props.forEach(prop => {
                    const direction = prop.direction === 'desc' ? -1 : 1;
                    if (a[prop.name] < b[prop.name]) {
                        comparison = -1 * direction;
                    } else if (a[prop.name] > b[prop.name]) {
                        comparison = 1 * direction;
                    }
                });
                return comparison;
            });
        });
        this._data = newData;
    }

    filterData() {

    }
    get data(){
        return this._data;
    }
}