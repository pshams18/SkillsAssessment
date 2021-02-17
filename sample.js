'use strict';
/*
 * I have utilized the github repo created by user tonybadguy
 * because they have already created the request and response
 * forms needed in order to utilize the Yelp Fusion API Client,
 * I have created a segment below that grabs the first two reviews
 * of Oscars Pub N Grill and creating a 'pretty JSON' object to be
 * printed by the console. I have included the URL for the github I
 * utilized https://github.com/Yelp/yelp-fusion/tree/master/fusion/node
 *
 * In a scenario where I would have time I would personally 
 * create request forms and do the various parts on my own, but
 * given the time constraint of 2-3 hours set by Crescendo Collective
 * I felt it in my best interest to utilize an open source resource
 * from Yelp
 * 
 * This sample file was used to practice with the yelp api before I built my 
 * own API endpoint. This can ignored/deleted, but I left it so that the
 * reviewer could see some more of my process
*/
const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'd9M-DIlU6SzWmgGRyDH6SMuUTVQBtSA_lnsvkQiZlODthvxvdZZRVFcoHXoB6XpwYNKS8RrmfQZdNnddtulOmTLb-3sxrnESelOms3Pihnbc3AXI_8BHam69xTcsYHYx';
const businessId = 'tnf6a9ywrnwkV6cv5SrWnA'

const client = yelp.client(apiKey);

const reviewList = client.reviews(businessId).then(response => {
     const firstResult = response.jsonBody.reviews[0];
     const secondResult = response.jsonBody.reviews[1];
     
     const prettyJsonOne = JSON.stringify(firstResult, null, 4);
     const prettyJsonTwo = JSON.stringify(secondResult, null, 4);

     let prettyJson = [prettyJsonOne, prettyJsonTwo];
     prettyJson
    }).catch(e => {
     console.log(e);
   });;

   module.exports = reviewList;