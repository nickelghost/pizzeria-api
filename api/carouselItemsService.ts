const carouselItemsService = {
  findAll: async () => {
    return [
      {
        id: 'bc8df587-9fff-4fdd-b93b-840867f47ae4',
        title: '3 pizzas for the price of two!',
        description:
          'When you buy three pizzas, the cheapest one will be free! Appliess till 21/09/2022',
        pictureUrl: 'https://example.com/pizzas.jpg',
      },
      {
        id: 'ff3225dd-3de8-4835-902e-ab7bbdd21e9d',
        title: 'The new menu arrived!',
        description:
          "We have just revamped our menu with some new great flavours! Check it out, you won't regret it ;)",
        pictureUrl: 'https://example.com/menu.jpg',
        destinationUrl: '/menu',
      },
    ];
  },
};

export default carouselItemsService;
