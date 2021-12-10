import React from 'react'

const TableFormat = ({ TheoryResult, theory }) => {

    return (

        <div class="  flex flex-rol">
            <div class=" h-screen  mx-24  shadow-inner relative ">
                <span className='absolute text-5xl -top-24 -left-28'>{theory} </span>
                <div class=" shadow-xl ">
                    <table className='border-t-4 border-l-4 border-gray-200 rounded-lg'>
                        <thead class="bg-gray-300">


                            <tr>
                                {/* { */}
                                    {/* TheoryResult[0].map(item => ( */}

                                        <th class="px-6 py-2 text-xl text-black-500">
                                            {/* {item} */}
                                            ID
                                        </th>
                                    {/* )) */}
                                     <th class="px-6 py-2 text-xl text-black-600">
                                        Name
                                    </th>
                                    <th class="px-6 py-2 text-xl text-black-600">
                                        Subject
                                    </th>
                                    <th class="px-6 py-2 text-xl text-black-600">
                                        Marks
                                    </th>
    
                                    <th class="px-6 py-2 text-xl text-black-600">
                                        Credits
                                    </th> 
                                {/* } */}
                            </tr>
                        
                        </thead>
                        {
                            TheoryResult.map((record) => (
                                <tbody class="bg-white">
                                    <tr class="whitespace-nowrap">
                                        <td class="px-6 py-4 text-l text-gray-600">
                                            {record.id}
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="text-l text-gray-900">
                                                {record.name}
                                            </div>
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="text-l text-gray-500">{record.subject}</div>
                                        </td>
                                        <td class="px-6 py-4 text-l text-gray-500">
                                            {record.Marks}
                                        </td>
                                        {/* <td class="px-6 py-4">
                        <span class="px-4 py-1 text-l text-white bg-blue-400 rounded">Edit</span>
                    </td> */}
                                        <td class="px-6 py-4">
                                            <span class="px-4 py-1 text-l text-white bg-red-400 rounded">{record.credits}</span>
                                        </td>

                                    </tr>

                                </tbody>
                            ))
                        }

                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableFormat
