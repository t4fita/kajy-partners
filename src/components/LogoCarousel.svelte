<script>
  import ClientHub from "./ClientHub.svelte";

    
    const clients = [
      { name: '3M', logo: '/logos/3m.svg' },
      { name: 'Barstool Store', logo: '/logos/barstool-store.svg' },
      { name: 'Budweiser', logo: '/logos/budweiser.svg' },
      { name: 'BuzzFeed', logo: '/logos/buzzfeed.svg' },
      { name: 'KP', logo: '/company/kajy-logo.png' },

      { name: '3M', logo: '/logos/3m.svg' },
      { name: 'Barstool Store', logo: '/logos/barstool-store.svg' },
      { name: 'Budweiser', logo: '/logos/budweiser.svg' },
      { name: 'BuzzFeed', logo: '/logos/buzzfeed.svg' },

      { name: 'Forbes', logo: '/logos/forbes.svg' },

      
    ];
</script>

<ClientHub {clients}/>
