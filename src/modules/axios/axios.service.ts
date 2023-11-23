import { Injectable } from '@nestjs/common';

import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AxiosService {
  private storageUrl;
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.storageUrl = this.configService.get('fileStorageUrl');
  }

  async deleteFile(url: string) {
    await this.httpService
      .delete(this.storageUrl, {
        data: {
          url,
        },
      })
      .subscribe({
        next: () => {},
        error: (err) => {
          console.log(err);
        },
      });
  }
}
