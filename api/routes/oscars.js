const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app

/*
 * I have included the business Id here but ideally I would make this a 
 * dynamic form that would call the Yelp API business search and then 
 * pull the businessId from that form and send it to the reviews API call
 * but as I tried that it was taking too much time so I decided to hard
 * code in this case because we were only doing the one restaurant.
 */
const apiKey = 'd9M-DIlU6SzWmgGRyDH6SMuUTVQBtSA_lnsvkQiZlODthvxvdZZRVFcoHXoB6XpwYNKS8RrmfQZdNnddtulOmTLb-3sxrnESelOms3Pihnbc3AXI_8BHam69xTcsYHYx';
const businessId = 'tnf6a9ywrnwkV6cv5SrWnA'

//giving the yelp api key that I generated with my account to the client
const client = yelp.client(apiKey);
   
// Using the url dictated in app.js (restaurants/oscarsID)
// I have only added two reviews, as the yelp reviews api only allows for
// a total of three reviews to be drawn, thus I grabbed two at my leisure
router.get('/', (req, res, next) => {
    client.reviews(businessId).then(response => {
        const firstResult = response.jsonBody.reviews[0];
        const secondResult = response.jsonBody.reviews[2];

        const prettyJsonOne = JSON.stringify(firstResult, null, 2);
        const prettyJsonTwo = JSON.stringify(secondResult, null, 4);

        let prettyJson = [prettyJsonOne, prettyJsonTwo];
        
        //ensuring the status is 200, then printing a json object that i created
        // above that consists of the first two reviews
        res.status(200).json({
            message: prettyJson
        })
      });
       
});

module.exports = router;