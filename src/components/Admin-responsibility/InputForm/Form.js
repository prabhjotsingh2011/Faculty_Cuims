import React from 'react'

const Form = () => {
    return (
        <div class="mt-10 sm:mt-0 shadow-lg">
            <div className='text-center bg-gray-800  my-4 py-4 rounded-lg ' >
                <span className='text-white text-3xl' >Enter the Details</span>
            </div>
            {/* <div class="md:grid md:grid-cols-3 md:gap-6"> */}
            <div class="">
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="first_name" class="block text-xl text-gray-600 font-bold">Feild 1</label>
                                        <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md border border-red-400 h-8" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="last_name" class="block text-xl text-gray-600 font-bold">Feild 2</label>
                                        <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md border-red-400 h-8" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-4">
                                        <label for="email_address" class="block text-xl text-gray-600 font-bold">Feild 3</label>
                                        <input type="text" name="email_address" id="email_address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md border-red-400 h-8" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="country" class="block text-xl text-gray-600 font-bold">Feild 4</label>
                                        <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border  bg-white border-red-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Otion 3</option>
                                        </select>
                                    </div>

                                    <div class="col-span-6">
                                        <label for="street_address" class="block text-xl text-gray-600 font-bold">Feild 5</label>
                                        <input type="text" name="street_address" id="street_address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  border border-red-400 rounded-md  h-8" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="city" class="block text-xl text-gray-600 font-bold">Feild 6</label>
                                        <input type="text" name="city" id="city" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md border-red-400 h-8" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="state" class="block text-xl text-gray-600 font-bold">Feild 7</label>
                                        <input type="text" name="state" id="state" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md border-red-400 h-8" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="postal_code" class="block text-xl text-gray-600 font-bold">Feild 7</label>
                                        <input type="text" name="postal_code" id="postal_code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md border-red-400 h-8" />
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
