const { ProductMode } = require("../../Model/product");

const Getproduct=async(req,res)=>{

    //am showing the productes are based on the  a categetry that y am passing the filter sag in every time
    let  {filterSlug}=req.query  
    filterSlug= filterSlug? filterSlug:"refrigerators"
  
    

    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 15;
        const search = req.query.search || "";
        let sort = req.query.sort || "minRentAmount" 
        req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);
        let sortBy = {};

        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = "asc";
        }
        let  products;
        if(search){
            products= await ProductMode.find({  name: { $regex: search, $options: "i" } }).sort(sortBy).limit(limit)
        }
        else{
            products= await ProductMode.find({ filterSlug  }).sort(sortBy).limit(limit)
        }
         
            

        const ProductData = {
            error: false,
            page: page + 1,
            limit,
            products
        };

          res.status(200).send({ProductData});

        
    } catch (error) {
            res.status(404).send({ "Message": "Failed", "Error": error });
    }



}

module.exports={Getproduct}