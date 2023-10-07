// Define the skillsMember function
function skillsMember(member) {
    // Check if the member has any skills
    if (member.skills.length === 0) {
      console.log(`${member.name} has no skills.`);
    } else {
      // Print out the member's skills
      console.log(`${member.name}'s skills:`);
      member.skills.forEach((skill) => {
        console.log(`- ${skill}`);
      });
    }
  }
  
  // Define a member object
  const member = {
    name: 'John Doe',
    skills: ['JavaScript', 'HTML', 'CSS']
  };
  
  // Call the skillsMember function with the member object as an argument
  skillsMember(member);