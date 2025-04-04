﻿using DefineXWeb.Models;
using DefineXWeb.Services.IServices;

namespace DefineXWeb.Services
{
    public class CouponService : BaseService, ICouponService
    {
        private readonly IHttpClientFactory _clientFactory;

        public CouponService(IHttpClientFactory clientFactory) : base(clientFactory)
        {
            _clientFactory = clientFactory;
        }
        public async Task<T> GetCoupon<T>(string couponCode, string token = null)
        {
            return await this.SendAsync<T>(new ApiRequest()
            {
                ApiType = SD.ApiType.GET,
                Url = SD.ApiGatewayBase + "/api/coupon/" + couponCode,
                AccessToken = token
            });
        }
    }
}
