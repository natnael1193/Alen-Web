const CategoryServiceType = () => {
    return(
        <div>
            <div>
                <div className="text-[24px] font-semibold">Category</div>
                <div className="mt-3 space-y-1">
                    {
                        [1,2,3,4].map((category, index) => {
                            return(
                                <div className="flex space-x-3" key={index}>
                                <input type="checkbox" className="bg-red-500"/>
                                <div className="font-semibold">Category Name</div>
                                </div>
                            )
                        })
                        }
                </div>
            </div>
            <div className="mt-5">
                <div className="text-[24px] font-semibold">Service Type</div>
                <div className="mt-3 space-y-1">
                    {
                        ['1 Time Service', 'Recuring Service'].map((category, index) => {
                            return(
                                <div className="flex space-x-3" key={index}>
                                    <input type="checkbox" />
                                    <div className="font-semibold">{category}</div>
                                </div>
                                )
                        })
                        }
                </div>
            </div>
        </div>
    )
}
export default CategoryServiceType;