import abstract from '../images/abstract-icon.png';
import sarphens from '../images/sarphens-illustration.png';
import './ProductTable.css';
import Select from 'react-select';
import productsData from './ProductTableData';

const ProductTable = () => {
    const options = [
        { value: 'last30Days', label: 'Last 30 Days' },
    ]
    const products = productsData.map((product) => (
        <tr key={product.productId} className="bg-white dark:bg-gray-800">
            <th scope="row" className="flex px-12 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img className="abstract" src={abstract} alt="earnings"></img>
                <div className="px-1">
                    <div className='font-bold'>
                        {product.productName}
                    </div>
                    <div className='small-text'>
                        <small>{product.productAdditionalInfo}</small>
                    </div>
                </div>
            </th>
            <td className="px-4 py-4">
                {product.stock}
            </td>
            <td className="px-4 py-4">
                {product.price}
            </td>
            <td className="px-4 py-4">
                {product.sales}
            </td>
        </tr>

    ))
    return (
        <div className="relative overflow-x-auto border-2 rounded-xl">
            <div className='first-row'>
                <div className='first-row-heading'>Product Sell</div>
                <div className='utilities'>
                    <div className='row-items'>
                        <div className="search-box">
                            <input type="text" className='input-field' placeholder="Search" />
                        </div>
                        <div className='select-span'>
                            <Select className='select-field' defaultInputValue='Last 30 Days' options={options} />
                        </div>
                    </div>
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs capitalize border-b-2">
                    <tr>
                        <th scope="col" className="px-12 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Stock
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Total Sales
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;