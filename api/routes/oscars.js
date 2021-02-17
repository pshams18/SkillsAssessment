const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'd9M-DIlU6SzWmgGRyDH6SMuUTVQBtSA_lnsvkQiZlODthvxvdZZRVFcoHXoB6XpwYNKS8RrmfQZdNnddtulOmTLb-3sxrnESelOms3Pihnbc3AXI_8BHam69xTcsYHYx';
const businessId = 'tnf6a9ywrnwkV6cv5SrWnA'

const client = yelp.client(apiKey);

const jsonBody = client.reviews(businessId).then(response => {
     const firstResult = response.jsonBody.reviews[0];
     const secondResult = response.jsonBody.reviews[1];
     
     const reviewList = [firstResult, secondResult];
     JSON.stringify(reviewList);
     
   });

   

router.get('/', (req, res, next) => {
    
    res.status(200).json({
        message: jsonInfo
    })
})

module.exports = router;