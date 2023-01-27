const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
  }
  
  module.exports = {
    ROLE: ROLE,
    users: [
      { id: 1, name: 'Mahima', role: ROLE.ADMIN },
      { id: 2, name: 'Arpita', role: ROLE.BASIC },
      { id: 3, name: 'Mitali', role: ROLE.BASIC }
    ],
    projects: [
      { id: 1, name: "Discovery of India", userId: 1 },
      { id: 2, name: "Gulliver's Travels", userId: 2 },
      { id: 3, name: "Papertowns", userId: 3 }
    ]
  }