class IngredientsController < ApplicationController

    def index
        ingredients = Ingredient.all

        if session[:user_id]
        render json: ingredients
        else
        render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def popular_ingredients
        ingredients = Ingredient.all.filter {|ingredient| ingredient.recipes.length >= 2}
        render json: ingredients
    end

    # private

    # def recipe_params
    #     params.permit(:name)
    # end
end
