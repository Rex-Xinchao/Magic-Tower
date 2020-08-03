const monsterManual = {
  '01': function() {
    this.Name = 'blueBall'
    this.Health = 10
    this.Attack = 1
    this.Defense = 9
    this.MagicAttack = 0
    this.MagicDefense = 0
    this.Dexterous = 2
    this.Luck = 0
    this.Experience = 5
    this.isDead = false
  },
  '99': function() {
    this.Name = 'ase'
    this.Health = 15
    this.Attack = 999
    this.Defense = 5
    this.MagicAttack = 1
    this.MagicDefense = 1
    this.Dexterous = 1
    this.Luck = 0
    this.Experience = 20
    this.isDead = false
  }
}

export default monsterManual