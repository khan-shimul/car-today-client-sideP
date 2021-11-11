const cars = [
    { name: 'Audi A7', description: 'The Audi A7 sedan boasts timeless and elegant exterior style that suits its ergonomic interior. For practical purposes, you may be just as intrigued by the A7s sporty hatchback rear (which Audi calls "Sportback") and generous 24.5 cu ft of fixed cargo capability.', price: 3759.99, rating: 4.1, reviews: 910, color: 'Red', fast: 210, img: 'https://i.ibb.co/hgZ5j89/Audi-A7.png' },
    { name: '2021 Acura ILX', description: 'Highs Spacious front seat, desirable standard features, notable value proposition. Lows Cramped rear seat, tame driving demeanor, noisy cabin. Verdict The ILX doesnt provide precision crafted performance, but its a solid value', price: 2059.99, rating: 4.7, reviews: 510, color: 'White', fast: 130, img: 'https://i.ibb.co/D1CWwyf/2021-Acura-ILX.png' },
    { name: 'BMW 750', description: 'For pure passenger luxury, check out the sixth-generation BMW 750 (2016-present), a full-size sedan with a quiet interior and plenty of tech. Powered by a turbocharged 4.4L V8 engine and paired with an eight-speed automatic transmission, this is the mid-trim edition of the 2016-2021 BMW 7-Series.', price: 559.99, rating: 3.8, reviews: 310, color: 'White', fast: 170, img: 'https://i.ibb.co/tBfyNMf/BMW-750.png' },
    { name: 'Mercedes-Benz C43 AMG', description: 'The Mercedes Benz C43 AMG is the sport-tuned version of the C-Class, available from 2017-2019 as a four-door sedan, two-door coupe, or retractable-top cabriolet. All are powered by a turbocharged 3.0L V6 engine with all-wheel drive and a nine-speed automatic transmission.', price: 3759.99, rating: 4.5, reviews: 340, color: 'White', fast: 310, img: 'https://i.ibb.co/sWy7kcN/Mercedes-Benz-C43-AMG.png' },
    { name: 'Mercedes-Benz E400', description: 'Refreshed for its fifth-generation debut in 2017, the Mercedes-Benz E400 blends classically styled premium interiors with the latest in functional tech and powertrain performance. A highly accessible midsize luxury vehicle, the 2017-2018 E400 is available as a five-seat sedan, seven-seat wagon, four-seat coupe, or cabriolet. Regardless of your preferences or passenger numbers, the E400 may suit your needs.', price: 750.99, rating: 4.3, reviews: 410, color: 'White', fast: 110, img: 'https://i.ibb.co/QNkSG5L/Mercedes-Benz-E400.png' },
    { name: 'Jaguar F-Type', description: 'The only two-seater sports car to make this list, the Jaguar F-Type boasts so much more than thrilling performance capabilities. The 2017-2019 F-Type has a standard supercharged 3.0L V6 engine; a 2.0L four-cylinder turbocharged engine is available from 2018. Style-wise, you may love the leather seating with a color-matched dash, three-spoke leather steering wheel, and discreetly hidden dual cup holders.', price: 999.99, rating: 4.7, reviews: 610, color: 'Red', fast: 340, img: 'https://i.ibb.co/F7PLbzM/Jaguar-F-Type.png' },
    { name: 'Audi S5', description: 'Audis athletic S5 is the sport-tuned version of the A5, available from 2018 as a two-door luxury coupe, four-door Sportback sedan, or convertible. Powered by a twin-turbo 3.0L V6 engine, the 2018-2020 S5 is designed to provide excellent road confidence, acceleration, and handling.', price: 559.99, rating: 3.9, reviews: 680, color: 'Black', fast: 170, img: 'https://i.ibb.co/QKYFPcD/Audi-S5.png' },
    { name: 'Mercedes-Benz S550', description: 'Despite entering its final year of production in 2017, the Mercedes-Benz S550 takes the runner-up spot on this list thanks to its timeless appeal and luxurious interior. The 2017 S550 is equipped with a twin-turbocharged 4.7L V8 engine and nine-speed automatic transmission across its five-seater sedan, four-seater coupe, and convertible body styles. The 2017 S550e is a hybrid sedan with a combined 3.0L V6 gasoline engine and 85kWh plug-in electric motor powertrain.', price: 759.99, rating: 4.6, reviews: 650, color: 'White', fast: 220, img: 'https://i.ibb.co/52JZWhN/Mercedes-Benz-S550.png' },
    { name: 'BMW 540', description: 'Taking the top spot on our list is the BMW 540, a midsize five-seat luxury sedan equipped with a 3.0L twin-turbo six-cylinder engine from 2017-2020. Offering a striking balance of driving performance and breathtaking passenger luxury, the 2017-2019 BMW 540i can be a drivers delight. Its features can elevate and ease both the daily commute and more leisurely weekends, with power-adjustable front sport seats, voice-control capability, and built-in navigation.', price: 5800.99, rating: 4.9, reviews: 590, color: 'Black', fast: 270, img: 'https://i.ibb.co/xh9kFVx/BMW-540.png' },
    { name: 'Porsche Panamera', description: 'The Porsche Panamera is a four-door, four-seat sedan brimming with sporting technology under its unique, curvaceous frame. The 2017-2019 Panamera (part of its second generation) has been thoughtfully crafted throughout and boasts a broad range of engine options. From 2017, this includes a turbocharged 3.0L V6 for all base models. The addition of two further body styles in 2018 accommodates drivers seeking extended rear legroom or more fixed cargo space—up to 18.3 cu ft with the Sport Turismo.', price: 999.99, rating: 4.7, reviews: 530, color: 'White', fast: 270, img: 'https://i.ibb.co/N6vd1gm/Porsche-Panamera.png' }
]