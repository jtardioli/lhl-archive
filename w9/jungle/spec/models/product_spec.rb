require 'rails_helper'

RSpec.describe Product, type: :model do
  describe 'Validations' do
 
    it "Should have one item being created" do 
      my_cat = Category.create!(name: "test cat")
      @product = Product.new(
        name: "Test Name", 
        price_cents: 100000,
        quantity: 20,
        category_id: my_cat.id,
      )
    
      expect(@product).to be_valid()
    end

    it "Should fail for not having a name" do 
      my_cat = Category.create!(name: "test cat")
      @product = Product.new(
        price_cents: 100000,
        quantity: 20,
        category_id: my_cat.id,
      )
    
      expect(@product).to_not be_valid()
    end

    it "Should fail for not having a price" do 
      my_cat = Category.create!(name: "test cat")
      @product = Product.new(
        name: "Test Name", 
        quantity: 20,
        category_id: my_cat.id,
      )
    
      expect(@product).to_not be_valid()
    end

    it "Should fail for not having a quantiy" do 
      my_cat = Category.create!(name: "test cat")
      @product = Product.new(
        name: "Test Name", 
        price_cents: 100000,
        category_id: my_cat.id,
      )
    
      expect(@product).to_not be_valid()
    end
    it "Should fail for not having a category" do 
      my_cat = Category.create!(name: "test cat")
      @product = Product.new(
        name: "Test Name", 
        quantity: 20,
        price_cents: 100000
      )
    
      expect(@product).to_not be_valid()
    end

  end
end

