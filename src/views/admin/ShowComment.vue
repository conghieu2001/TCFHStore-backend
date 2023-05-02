<template>
  <div class="container-page">
    <h3>Tất cả bình luận</h3>
    <div class="wapper">
      <div
        class="row commentByUser mt-2"
        v-for="item in ItemsComment"
        :key="item._id"
      >
        <div class="col-4 d-flex align-baseline commentByUser-left pt-3">
          <div class="item-image">
            <img :src="item.picture" alt="" />
          </div>
          <div class="item-name pl-3 pt-3">
            <h6>{{ item.nameItem }}</h6>
          </div>
        </div>
        <div class="col-8 commentByUser-right pt-4 pl-5 pr-5">
          <div v-if="item.comments.length > 0">
            <div
              class="row"
              v-for="comment in item.comments"
              :key="comment._id"
            >
              <div class="d-flex justify-content-center">
                <span @click="deleComment(comment._id)" class="trash-comment mr-5 pt-3"><i class="fas fa-trash-alt"></i></span>
                <img :src="comment.image" alt="" />
                
                  <div>
                    <h6>{{ comment.nameus }}</h6>
                    <p>{{ comment.comment }}</p>
                  </div>
                
              </div>
            </div>
          </div>
          <div v-else><p class="ChuaCoBinhLuan">Chưa có bình luận</p></div>
          <hr class="mt-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CmtService from "../../services/cmt.service";
import ItemService from "../../services/item.service";
export default {
  data() {
    return {
      ItemsComment: "",
      // comments: {},
    };
  },
  methods: {
    async getAllItemComment() {
      try {
        this.ItemsComment = await CmtService.getByIdpd();
        // console.log(this.Items[0]._id);
        console.log(this.ItemsComment);
      } catch (error) {
        console.log(error);
      }
    },
    async deleComment(idcmt) {
      await CmtService.deleteCmt(idcmt);
      location.reload();
    }
  },
  mounted() {
    this.getAllItemComment();
    // this.getCmtByIDPD();
  },
};
</script>
<style scpoed>
h3 {
  text-decoration: none;
  font-size: 22px;
  font-weight: 400;
  color: #424242;
}
.container-page {
  padding: 20px 300px;
  background-color: #eff0f5;
  min-height: 650px;
}
.wapper {
  width: 990px;
}
.commentByUser {
  background-color: #fff;
  border-radius: 5px;
}
.commentByUser-left {
  min-height: 200px;
  border-right: 4px solid #e57905;
}
.item-image > img {
  width: 50px;
}
.commentByUser-right img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.commentByUser-right h6 {
  padding-left: 10px;
  padding-top: 10px;
  color: #222b45;
  font-weight: bold;
  font-size: 14px;
}
.commentByUser-right p {
  font: 14px/18px Arial, Helvetica, sans-serif;
  margin-left: 10px;
}
.ChuaCoBinhLuan {
  font: 14px/18px Arial, Helvetica, sans-serif;
  margin-left: 14px;
}
.trash-comment:hover  .fa-trash-alt{
  color: rgb(249, 117, 139);
}
.fa-trash-alt {
  color: #e57905;
}
</style>
