import moment from 'moment'

const reportsTpl = [
    {id: 'test', title: 'ВКЛ-14 Счета по которым не совершались операции более 2-х лет'},
    {id: 'test2', title: 'ВКЛ-29 Закрытые счета с нулевым остатком'}
]

const createTitle = (id) => {
    const {title = null} = reportsTpl.find(item => item.id === id) || {}
    return title
}

const dateformat = 'DD.MM.YYYY'
// const dateTimeformat = 'DD.MM.YYYY hh:mm:ss'

const col = [
    {id: 'idMinor', label: 'idMinor', align: 'left', minWidth: 120, format: (value) => value},
    {id: 'idMajor', label: 'idMajor', align: 'left', minWidth: 120, format: (value) => value},
    {id: 'opday', label: 'opday', align: 'left', minWidth: 120, format: (value) => moment(value).format(dateformat)},
    {
        id: 'optransday',
        label: 'optransday',
        align: 'left',
        minWidth: 120,
        format: (value) => moment(value).format(dateformat)
    },
    {id: 'office', label: 'office', align: 'left', minWidth: 70, format: (value) => value},
    {id: 'branchno', label: 'branchno', align: 'left', minWidth: 70, format: (value) => value},
    {id: 'idMega', label: 'idMega', align: 'left', minWidth: 70, format: (value) => value},
    {id: 'balance', label: 'balance', align: 'left', minWidth: 100, format: (value) => value},
    {id: 'state', label: 'state', align: 'left', minWidth: 60, format: (value) => value},
    {id: 'opno', label: 'opno', align: 'left', minWidth: 50, format: (value) => value},
    {
        id: 'expirationday',
        label: 'expirationday',
        align: 'left',
        minWidth: 120,
        format: (value) => moment(value).format(dateformat)
    },
    {id: 'opkind', label: 'opkind', align: 'left', minWidth: 50, format: (value) => value},
    {
        id: 'prolongday',
        label: 'prolongday',
        align: 'left',
        minWidth: 120,
        format: (value) => moment(value).format(dateformat)
    }
]



export {createTitle, col, reportsTpl}
