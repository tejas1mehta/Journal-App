class PostsController < ApplicationController

  def new
    head :ok
  end

  def index
    @posts = Post.all
    respond_to do |format|
      format.html {render :index}
      format.json {render :json => @posts}
    end
  end

  def show
    @post = Post.find(params[:id])
    render :json => @post
  end

  def create
    @post = Post.new(posts_params)
    @post.save
    render :json => @post
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(posts_params)
      render :json => @post
    end
  end

  private
  def posts_params
    params.require(:post).permit(:title,:body)
  end
end
