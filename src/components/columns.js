import { format } from 'date-fns'
import { ColumnFilter } from './ColumnFilter'

export const COLUMNS = [
    {
        Header: 'Date',
        accessor: "date",
        Cell: ({ value }) => {
            return format(new Date(value), 'dd/MM/yyyy')
        }
    },
    {
        Header: 'App',
        accessor: 'app_id'
    },
    {
        Header: 'Requests',
        accessor: 'requests',
        disableFilters: true
    },
    {
        Header: 'Responses',
        accessor: 'responses'
    },
    {
        Header: 'Impressions',
        accessor: 'impressions'
    },
    {
        Header: 'Clicks',
        accessor: 'clicks'
    },
    {
        Header: 'Revenue',
        accessor: 'revenue'
    },
    {
        Header: 'Fill Rate'
    },
    {
        Header: 'CTR'
    }
]