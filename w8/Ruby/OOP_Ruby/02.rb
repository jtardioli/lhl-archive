class GoodDog
  attr_accessor :name, :weight, :height

  def initialize(n, h, w)
    @name = n
    @height = h
    @weight = w
  end


  def change_info(n, h, w)
    self.name = n
    self.height = h
    self.weight = w
  end

  # def name                  # This was renamed from "get_name"
  #   @name
  # end

  # def name=(n)              # This was renamed from "set_name="
  #   @name = n
  # end

  def speak
    "#{name} says Ruff!"
  end

  def info
    "#{self.name} weighs #{self.weight} and is #{self.height} tall."
  end
end
# sparky = GoodDog.new('Sparky', '12 inches', '10 lbs')
# puts sparky.info      # => Sparky weighs 10 lbs and is 12 inches tall.
# puts sparky.speak

# puts sparky.name
# sparky.name = "Spartacus"

# puts sparky.name

# sparky.change_info('Spartacus', '24 inches', '45 lbs')
# puts sparky.info      # => Spartacus weighs 45 lbs and is 24 inches tall.

#+++++++++++++++++++++++++++++++++++++++++++++++
# EXERCISES
#1.

class MyCar 
  attr_accessor :speed, :on
  def initialize (y, c, m)
    @year = y
    @color = c
    @model = m
    @speed = 0
    @on = true
  end 

  def speed_up(new_speed)
    self.speed += new_speed
  end

  def break(new_speed)
    self.speed -= new_speed
  end

  def shut_off()
    self.on = false
  end

  def chaneg
end

car1 = MyCar.new(1998, "red", "Ferari")

puts car1.speed
car1.speed_up(25)
puts car1.speed
car1.break(5)
puts car1.speed

puts car1.on
car1.shut_off
puts car1.on


