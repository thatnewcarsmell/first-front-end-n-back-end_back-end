exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
  .then(function () {
  // Inserts seed entries
      return knex('students').insert([
          {
              name: 'Ben',
              fave_animal: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/A-G/cheetah-running.adapt.945.1.jpg',
              previous_occupation: 'Sales Associate',
              hometown_lat: 39.7392,
              hometown_long: 104.9903,
              useless_superpower:'night vision in day time'
          },
          {
              name: 'Andrew Pedersen',
              fave_animal: 'http://www.funnyjunksite.com/pictures/wp-content/uploads/2015/08/Funny-Llama-Picture.jpg (222 kB)',
              previous_occupation: 'Bartender',
              hometown_lat: 30.4383,
              hometown_long: 84.2807,
              useless_superpower: 'Can dunk basketball from halfcourt underwater'
          },
          {
              name: 'Grant Fogle',
              fave_animal: 'https://media.mnn.com/assets/images/2017/01/sleeping-bear-log.jpg.838x0_q80.jpg',
              previous_occupation: 'SEO Account Dude',
              hometown_lat: 39.5186,
              hometown_long: 104.7614,
              useless_superpower: 'always 5 minutes late'
          },
          {
              name: 'Sir. Phiillip Hengemuhle the First',
              fave_animal: 'http://infoweasels.com/whatcat.jpg',
              previous_occupation: 'Dancer',
              hometown_lat: 40.0150,
              hometown_long: 105.2705,
              useless_superpower: 'Sub-par speling'
          },
          {
              name: 'Jess',
              fave_animal: 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/03/baby_platypuses.jpg?itok=KL69Np6v&fc=50,50',
              previous_occupation: 'Wellsite Geologist',
              hometown_lat: 32.768799,
              hometown_long: -97.309341,
              useless_superpower: 'can walk real slow'
          },
          {
              name: 'Meredith',
              fave_animal: 'https://photos.app.goo.gl/pVpPAWQSEb8arWpH7',
              previous_occupation: 'Paleontologist',
              hometown_lat: 29.7604,
              hometown_long: 95.3698,
              useless_superpower: 'Can communicate with rocks.'
          },
          {
              name: 'Ryan St.Germain',
              fave_animal: 'https://www.shoreupdate.com/wp-content/uploads/awpcp/images/mayhemsk9corps-758aa434-large.jpg',
              previous_occupation: 'Line',
              hometown_lat: 39.7294,
              hometown_long: 104.8319,
              useless_superpower: 'Able to get any snack from the snack tree'
          },
          {
              name: 'Kate',
              fave_animal: 'https://images.pexels.com/photos/53001/cougar-mountain-lion-puma-concolor-big-cat-53001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              previous_occupation: 'Event Manager',
              hometown_lat: 35.0844,
              hometown_long: 106.6504,
              useless_superpower: 'Can read the minds of houseflies'
          },
          {
              name: 'Trey',
              fave_animal: 'https://images-na.ssl-images-amazon.com/images/I/61irQrNjgnL._SY679_.jpg (33 kB)',
              previous_occupation: 'General Manager',
              hometown_lat: 37.2638,
              hometown_long: 122.0230,
              useless_superpower: 'super deaf'
          },
          {
              name: 'Brandon RedShirt',
              fave_animal: 'https://images.unsplash.com/photo-1510853675132-58241c941e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9774e7d1ebaa9ac28f3259d4101b1854&auto=format&fit=crop&w=2305&q=80',
              previous_occupation: 'Aircraft Mechanic',
              hometown_lat: 39.7293989,
              hometown_long: 104.9930793,
              useless_superpower: 'Being able to remember the 57th word of every song heard.'
          },
          {
              name: 'Sonja',
              fave_animal: 'https://i0.wp.com/www.wagpets.com/wp-content/uploads/2017/11/the-pug-rose-ears.jpeg?w=960&ssl=1',
              previous_occupation: 'Marketing Manager',
              hometown_lat: 36.407249,
              hometown_long: 105.573067,
              useless_superpower: 'can understand the inner workings of butter'
          },
          {
              name: 'Beef', 
              fave_animal: 'https://palsawa.com/img/Jukcg.jpg',
              previous_occupation: 'Rock Climbing Instructor',
              hometown_lat: 45.0586,
              hometown_long: 92.1724,
              useless_superpower: 'Fly, but only two feet off the ground'
          },
          {
              name: 'Charity Van Buren',
              fave_animal: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bradypus.jpg/1024px-Bradypus.jpg',
              previous_occupation: 'Homemaker',
              hometown_lat: 40.5853,
              hometown_long: 105.0844,
              useless_superpower: 'I can drink a pot of tea in 2 minutes flat.'
          },
          {
              name: 'DeBronis Warren',
              fave_animal: 'https://cdn.images.express.co.uk/img/dynamic/galleries/x701/156708.jpg',
              previous_occupation: 'Military',
              hometown_lat: 39.9526,
              hometown_long: 75.1652,
              useless_superpower: "Can give off heat rays only when it's sunny and hot"
          },
          {
              name: 'Reid Garner',
              fave_animal: 'https://takeshape-prod.imgix.net/207c4ff8-bdf4-4529-970e-b992d4539152/dev/2ea87773-8dde-4724-a03c-bab1190a7a04/John%20Marais-%20Murembo.jpg?auto=compress%2Cformat',
              previous_occupation: 'Bartender',
              hometown_lat: 33.209,
              hometown_long: 87.569,
              useless_superpower: 'Being able to always tell the color of the next gumball to pop out of the machine'
          },
          {
              name: 'Gary Anderson',
              fave_animal: 'https://i.imgur.com/lrKyf3y.gif',
              previous_occupation: 'United States Navy',
              hometown_lat: 40.9478,
              hometown_long: 90.3712,
              useless_superpower: 'sleep on command'
          },
          {
              name: 'Evan Young',
              fave_animal: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJFlfaSP80DfWerdu2nIaBu8W5zBP7GA0qz_Vv-CwHwi-dcz9',
              previous_occupation: 'Stay at home kid',
              hometown_lat: 33.4251,
              hometown_long:  94.0477,
              useless_superpower: 'Can spawn a single ant'
          },
          {
              name: 'Josh Scala',
              fave_animal: 'https://secure.img1-fg.wfcdn.com/im/38103834/resize-h600%5Ecompr-r85/2804/28041725/%2527Proportions+of+the+Human+Figure+%2528Vitruvian+Man%2529%2527+by+Leonardo+Da+Vinci+Graphic+Art+on+Wrapped+Canvas.jpg',
              previous_occupation: 'Applications Engineer',
              hometown_lat: 40.959471,
              hometown_long: 74.125202,
              useless_superpower: 'Can telekinetically move rubbage, but only between two trash recepticles.'
          }
      ])
  })
}
